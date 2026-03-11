/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { SpecialtyService } from "./specialties.service";
import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";

const createSpecialties = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await SpecialtyService.createSpecialties(payload);
  sendResponse(res, {
    httpStatusCode: 201,
    success: true,
    message: "Specialties created successfully",
    data: result,
  });
});

const getAllSpecialties = catchAsync(async (req: Request, res: Response) => {
  const specialties = await SpecialtyService.getAllSpecialties();
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "data fetched successfully",
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
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Specialty updated  successfully",
    data: specialties,
  });
});
const deleteSpecialties = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const specialties = await SpecialtyService.deleteSpecialties(id as string);
  sendResponse(res, {
    httpStatusCode: 200,
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
