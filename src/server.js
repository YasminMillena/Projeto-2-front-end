// src/server.js
import { createServer } from "miragejs";

export function makeServer() {
  let server = createServer({
    routes() {
      
      this.namespace = "api";

     
      this.get("/cards", () => {
        return [
          {
            id: 1,
            category: "Design",
            title: "Ux review presentations",
            description:
              "How do you create compelling presentations that wow your colleagues and impress your managers?",
            author: "Olivia Rhye",
            date: "20 Jan 2022",
            image: "/Card-1.png",
            avatar: "/Avatar-1.png"
          },

            {
            id: 2,
            category: "Desenvolvedora",
            title: "Desenvolvedora-Web",
            description:
              "How do you create compelling presentations that wow your colleagues and impress your managers?",
            author: "Olivia Rhye",
            date: "20 Jan 2022",
            image: "/Card-2.png",
            avatar: "/Avatar-2.png"
          },

           {
            id: 3,
            category: "Desenvolvedora",
            title: "Desenvolvedora-Web",
            description:
              "How do you create compelling presentations that wow your colleagues and impress your managers?",
            author: "Olivia Rhye",
            date: "20 Jan 2022",
            image: "/Card-3.png",
            avatar: "/Avatar-3.png"
          },

        ];
      });
    }
  });

  return server;
}
