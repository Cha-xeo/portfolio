
import { PrismaClient } from '@prisma/client/extension';

const DEFAULT_ORDER_BY = {
    created_at: "desc",
}

const MAX_RECORDS_LIMIT = 100;

export default abstract class BaseRepository<A> {
    constructor(protected modelClient: PrismaClient){}
    getAll(options: Record<string, any> = {}): Promise<Array<A>> {
        // if (!options.orderBy){
        //     options.orderBy = DEFAULT_ORDER_BY;
        // }

        if (!options.take || options.take > MAX_RECORDS_LIMIT){
            options.take = MAX_RECORDS_LIMIT;
        }
        return this.modelClient.findMany(options);
    }

    getById(id: number, options: Record<string, any> = {}): Promise<A> {
        return this.modelClient.findUnique({
            ...options,
            where: {
                id,
            },
        });
    }
}