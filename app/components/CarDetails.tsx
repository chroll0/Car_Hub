import { CarProps } from "@/types";
import React from "react";

interface CardDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}
const CarDetails = ({ isOpen, closeModal, car }: CardDetailsProps) => {
  return <div></div>;
};

export default CarDetails;
