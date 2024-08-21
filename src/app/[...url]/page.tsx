import { ragChat } from "@/src/lib/rag-chat";
import React from "react";
interface PageProps {
  params: {
    url: string | string[] | undefined;
  };
}
const page = ({ params }: PageProps) => {
  const reconstructUrl = console.log(params);
  // await ragChat.context.add({
  //     type:"html",
  //     source:
  // })
  return (
    <div>
      <p>hello</p>
    </div>
  );
};

export default page;
