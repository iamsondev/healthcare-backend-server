/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { SpecialtyService } from "./specialties.service";
import { catchAsync } from "../../shared/catchAsync";

const createSpecialties = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await SpecialtyService.createSpecialties(payload);
  res.status(201).json({
    success: true,
    message: "Specialty created  successfully",
    data: result,
  });
});

const getAllSpecialties = catchAsync(async (req: Request, res: Response) => {
  const specialties = await SpecialtyService.getAllSpecialties();
  res.status(200).json({
    success: true,
    message: "Specialty fetched  successfully",
    data: specialties,
  });
});
const updateSpecialties = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const { id } = req.params;
  const specialties = await SpecialtyService.updateSpecialties(
    id as string,
    payload,
  );
  res.status(200).json({
    success: true,
    message: "Specialty updated  successfully",
    data: specialties,
  });
});
const deleteSpecialties = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const specialties = await SpecialtyService.deleteSpecialties(id as string);
  res.status(200).json({
    success: true,
    message: "Specialty deleted  successfully",
    data: specialties,
  });
});

export const SpecialtyController = {
  createSpecialties,
  getAllSpecialties,
  deleteSpecialties,
  updateSpecialties,
};
