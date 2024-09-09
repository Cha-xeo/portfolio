import BaseRepository from "./BaseRepository";
import prisma from "@/db"

export default class WebglgamesRepository extends BaseRepository<Webglgames> {
    constructor(){
        super(prisma.webglgames);
    }
}