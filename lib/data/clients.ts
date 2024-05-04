import { ObjectId } from "mongodb";
import { ClientType } from "../types/clients";

export const clientsData: ClientType[] = [
  {
    _id: new ObjectId(),
    supplier: "Oak & Grain Ltd",
    address: "345 Pitlochery Road, Girvan, KA26 9JH",
    email: "james@oakandgrain.com",
    phone: "01292 345678",
  },
  {
    _id: new ObjectId(),
    supplier: "Scotch Unveiled",
    address: "1234 Whisky Road, Glasgow, G1 2AB",
    email: "mark@scotchunveiled.com",
    phone: "01512 345678",
  },
  {
    _id: new ObjectId(),
    supplier: "Whiskey Whispers",
    address: "345 Pitlochery Road, Girvan, KA26 9JH",
    email: "lori.graham@whiskywhispers.com",
    phone: "01292 345478",
  },
  {
    _id: new ObjectId(),
    supplier: "Whisky Wonders",
    address: "Unit 12, Old Fair Road, Edinburgh, EH1 3CD",
    email: "james@oakandgrain.com",
    phone: "01292 345678",
  },
  {
    _id: new ObjectId(),
    supplier: "McGinty's Spirits Ltd",
    address: "9 Whisky Avenue, Edinburgh, EH1 2CD",
    email: "ian@mcgintysspirits.com",
    phone: "0131 9876543",
  },
  {
    _id: new ObjectId(),
    supplier: "Wooden Cask Ltd",
    address: "345 Pitlochery Road, Girvan, KA26 9JH",
    email: "support@woodencask.com",
    phone: "01349 876543",
  },
];
