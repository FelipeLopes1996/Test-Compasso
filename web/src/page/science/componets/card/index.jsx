import React, { useState, useEffect } from "react";

import { getNotice } from "../../../../shared/service/service";

import { Card, Img, CardTitle, CardFooter } from "./style";

import Mod from "../../../../shared/components/modal";

const Carde = () => {
  const [noticias, setNotice] = useState([]);

  const MethodNoticias = async () => {
    await getNotice().then(setNotice);
  };

  useEffect(() => {
    MethodNoticias();
  }, []);

  useEffect(() => {
    MethodNoticias();
  }, []);

  useEffect(() => {}, [noticias]);

  return (
    <>
      {noticias.map((notice, i) => (
        <Card>
          <Img src={notice.multimedia.url} />

          <CardTitle>{notice.title}</CardTitle>
          <CardFooter>
            <Mod
              title={notice.title}
              url={notice.url}
              abstract={notice.abstract}
            />
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default Carde;
