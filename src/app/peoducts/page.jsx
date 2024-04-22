import Link from "next/link";

import React from "react";

const page = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/">Go to Home Page</Link>

      <section>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, ut.
          Temporibus odio explicabo pariatur, eaque fugit eveniet vitae nesciunt
          placeat numquam, rem exercitationem at excepturi. Autem in optio
          quisquam odio!
        </p>
      </section>
    </div>
  );
};

export default page;
