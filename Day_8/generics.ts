function identity<Generic>(str: Generic): Generic {
  return str;
}

console.log(identity("yousef"));
console.log(identity(2));

interface GenericInterface<Generic> {
  (str: Generic): Generic;
}

let myVar: GenericInterface<number> = identity;
console.log(myVar(87));
// console.log(myVar("yousef"));

interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}

function ranking<RankItem>(
  items: RankItem[],
  rank: (v: RankItem) => number,
): RankItem[] {
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item,
    rank: rank(item),
  }));

  ranks.sort((a, b) => b.rank - a.rank);

  return ranks.map((rank) => rank.item);
}

interface Char {
  name: string;
  hp: number;
}

const chars: Char[] = [
  {
    name: "J",
    hp: 10,
  },
  {
    name: "s",
    hp: 20,
  },
];

console.log(ranking(chars, ({ hp }) => hp));
