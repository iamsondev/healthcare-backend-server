import { Request, Response } from "express";
import { SpecialtyService } from "./specialties.service";

const createSpecialties = async (req: Request, res: Response) => {
  const payload = req.body;
  try {
    const result = await SpecialtyService.createSpecialties(payload);
    res.status(201).json({
      success: true,
      message: "Specialty created  successfully",
      data: result,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "specialties creation failed",
      Error: error,
    });
  }
};

export const SpecialtyController = {
  createSpecialties,
};
