import { Specialty } from "../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createSpecialties = async (payload: Specialty): Promise<Specialty> => {
  const specialty = await prisma.specialty.create({
    data: payload,
  });
  return specialty;
};
const getAllSpecialties = async (): Promise<Specialty[]> => {
  const specialty = await prisma.specialty.findMany({});
  return specialty;
};
const deleteSpecialties = async (id: string): Promise<Specialty> => {
  const specialty = await prisma.specialty.delete({
    where: { id },
  });
  return specialty;
};
const updateSpecialties = async (
  id: string,
  payload: Partial<Specialty>,
): Promise<Specialty> => {
  const specialty = await prisma.specialty.update({
    where: { id },
    data: payload,
  });
  return specialty;
};

export const SpecialtyService = {
  createSpecialties,
  getAllSpecialties,
  deleteSpecialties,
  updateSpecialties,
};
