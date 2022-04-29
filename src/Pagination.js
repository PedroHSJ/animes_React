import React from "react";

const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

export default ({ limit, total, offset }) => {
  const current = offset ? offset / limit + 1 : 1; //Se existir "offset" calcula a página atual, caso não, estou na página 1.
  const pages = Math.ceil(total / limit); //Math.ceil para arredondar para "cima" e adicionar uma página caso a divisão tenha resto.
  const first = Math.max(current - MAX_LEFT, 1); //Para não aparecer números negativos, usa-se o Math.max para pegar no mínino o 1 e no máximo o current - MAX_LEFT.

  return (
    <ul className="pagination p-2">
      {Array.from({ length: MAX_ITEMS })
        .map((_, index) => index + first)
        .map((page) => {
          return <li class="page-item"><a class="page-link" href="#">{page}</a></li>;
        })}
    </ul>
  );
};
