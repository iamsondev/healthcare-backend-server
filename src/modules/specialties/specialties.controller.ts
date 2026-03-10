/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { SpecialtyService } from "./specialties.service";

const createSpecialties = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result = await SpecialtyService.createSpecialties(payload);
    res.status(201).json({
      success: true,
      message: "Specialty created  successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "specialties creation failed",
      Error: error,
    });
  }
};

const getAllSpecialties = async (req: Request, res: Response) => {
  try {
    const specialties = await SpecialtyService.getAllSpecialties();
    res.status(200).json({
      success: true,
      message: "Specialty fetched  successfully",
      data: specialties,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "specialties fetched failed",
      Error: error,
    });
  }
};
const updateSpecialties = async (req: Request, res: Response) => {
  try {
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
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "specialties update failed",
      Error: error,
    });
  }
};
const deleteSpecialties = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const specialties = await SpecialtyService.deleteSpecialties(id as string);
    res.status(200).json({
      success: true,
      message: "Specialty deleted  successfully",
      data: specialties,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "specialties deletion failed",
      Error: error,
    });
  }
};

export const SpecialtyController = {
  createSpecialties,
  getAllSpecialties,
  deleteSpecialties,
  updateSpecialties,
};
