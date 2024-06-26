import { InvoiceData, StatusValue } from "./data";
import * as z from "zod";
import { InvoiceFormSchema } from "../schemas";
import { OrderType } from "./orders";

export interface DashboardProps {
  orders?: OrderType[];
}

export interface FilterProps {
  onFilterChange: (filterCriteria: string) => void;
}

export interface IconProps {
  children: React.ReactNode;
  svgProps: React.SVGProps<SVGSVGElement>;
}

export interface InvoiceFormProps {
  onSubmit: (data: z.infer<typeof InvoiceFormSchema>) => void;
  initialValues?: Partial<z.infer<typeof InvoiceFormSchema>>;
  isEditing: boolean;
}

export interface StatusProps {
  status: StatusValue;
}
