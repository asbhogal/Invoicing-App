import { IResolvers } from "@graphql-tools/utils";
import { ordersData } from "@/lib/data/orders";
import { OrderType } from "@/lib/types/orders";

export const orderResolvers: IResolvers = {
  Query: {
    orders: async (_: unknown): Promise<OrderType[]> => {
      if (!ordersData) {
        throw new Error("Error loading orders data");
      }

      const listings: OrderType[] = await ordersData;

      return listings;
    },
  },
};
