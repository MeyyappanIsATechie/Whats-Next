import React from "react";

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return <div className="text-2xl">User {id} details</div>;
};

export default Page;
