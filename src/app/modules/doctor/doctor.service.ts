import status from "http-status";
import AppError from "../../errorHelpers/AppError";
import { prisma } from "../../lib/prisma";
import { IUpdateDoctorPayload } from "./doctor.interface";

const getAllDoctors = async () => {
  const result = await prisma.doctor.findMany({
    include: {
      user: true,
      specialties: {
        include: {
          specialty: true,
        },
      },
    },
  });
  return result;
};

const getDoctorById = async (id: string) => {
  const result = await prisma.doctor.findUnique({
    where: {
      userId: id,
    },
    include: {
      user: true,
      specialties: {
        include: {
          specialty: true,
        },
      },
    },
  });
  return result;
};

const updateDoctor = async (id: string, payload: IUpdateDoctorPayload) => {
  const { specialties, ...doctorData } = payload;

  const doctor = await prisma.doctor.findUnique({
    where: {
      userId: id,
    },
  });
  if (!doctor) {
    throw new AppError(status.NOT_FOUND, "Doctor Not Found");
  }

  const existingSpecialties = await prisma.doctorSpecialty.findMany({
    where: { doctorId: doctor.id },
  });
  const existingIds = existingSpecialties.map((s) => s.specialtyId);

  const result = await prisma.$transaction(async (tx) => {
    await tx.doctor.update({
      where: { userId: id },
      data: doctorData,
    });

    if (specialties && specialties.length > 0) {
      const deleteSpecialties = specialties.filter((s) => s.isDeleted);
      const addSpecialties = specialties.filter(
        (s) => !s.isDeleted && !existingIds.includes(s.specialtyId), // ✅ duplicate বাদ
      );

      for (const s of deleteSpecialties) {
        await tx.doctorSpecialty.deleteMany({
          where: { doctorId: doctor.id, specialtyId: s.specialtyId },
        });
      }

      for (const s of addSpecialties) {
        await tx.doctorSpecialty.create({
          data: { doctorId: doctor.id, specialtyId: s.specialtyId },
        });
      }
    }

    return tx.doctor.findUnique({
      where: { userId: id },
      include: {
        user: true,
        specialties: {
          include: { specialty: true },
        },
      },
    });
  });

  return result;
};

const deleteDoctor = async (id: string) => {
  const doctor = await prisma.doctor.findUnique({
    where: {
      userId: id,
    },
  });
  if (!doctor) {
    throw new AppError(status.NOT_FOUND, "Doctor Not Found");
  }
  const result = await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      isDeleted: true,
      deletedAt: new Date(),
    },
  });
  return result;
};
export const DoctorService = {
  getAllDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
};
