import { webglgamesimages } from "@prisma/client";
import BaseRepository from "./BaseRepository";
import prisma from "@/db"

export default class WebglgamesimagesRepository extends BaseRepository<webglgamesimages> {
    constructor(){
        super(prisma.webglgamesimages);
    }
}
