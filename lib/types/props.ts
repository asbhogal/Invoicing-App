import { StatusValue } from "./data";
import * as z from "zod";
import { InvoiceFormSchema } from "../schemas";

export type IconProps = {
  children: React.ReactNode;
  svgProps: React.SVGProps<SVGSVGElement>;
};

export interface InvoiceFormProps {
  onSubmit: (data: z.infer<typeof InvoiceFormSchema>) => void;
  initialValues?: Partial<z.infer<typeof InvoiceFormSchema>>;
  isEditing: boolean;
}

export interface StatusProps {
  status: StatusValue;
}
