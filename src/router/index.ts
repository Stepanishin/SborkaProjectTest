import React from "react";
import CardsList from "../components/CardsList/CardsList";
import CardPage from "../pages/CardPage/CardPage";
import { IRoute } from "../types/IRoute";

export const MainRoutes: IRoute[] = [
    {path: "/", exact: true, component: CardsList},
    {path: "*", exact: true, component: CardsList},
    {path: "/:id", exact: true, component: CardPage},
]