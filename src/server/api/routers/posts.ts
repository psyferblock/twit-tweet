import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postsRouter = createTRPCRouter({
  
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.post.findMany();
  }),
});

// publicProcedure is the method to generate the function that y our method calls 
// in this cse we want it to be public sincer the app we are creating allows the people to be able to open the home page without signing in 