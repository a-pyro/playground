/* 
If n is the numerator and d the denominator of a fraction, that fraction is defined a (reduced) proper fraction if and only if GCD(n,d)==1.

For example 5/16 is a proper fraction, while 6/16 is not, as both 6 and 16 are divisible by 2, thus the fraction can be reduced to 3/8.

Now, if you consider a given number d, how many proper fractions can be built using d as a denominator?

For example, let's assume that d is 15: you can build a total of 8 different proper fractions between 0 and 1 with it: 1/15, 2/15, 4/15, 7/15, 8/15, 11/15, 13/15 and 14/15.

You are to build a function that computes how many proper fractions you can build with a given denominator:

properFractions(1)==0
properFractions(2)==1
properFractions(5)==4
properFractions(15)==8
properFractions(25)==20
Be ready to handle big numbers.

Edit: to be extra precise, the term should be "reduced" fractions, thanks to girianshiido for pointing this out and sorry for the use of an improper word :)
*/

// vado da 1 a 15
// se in divisori c'è un numero che mi manda il modulo a 0 => ++
// significa che quel numero non ha comuni divisori con 15

const properFractions = (d) => {
  if (d === 1) return 0;
  const numeratori = Array(d)
    .fill(0)
    .map((el, i) => (el = i + 1));

  console.log(numeratori);

  const moduloDivisori = numeratori
    .filter((_, idx) => d % (idx + 1) === 0)
    .slice(1);

  console.log(moduloDivisori);

  const moduloNumeratori = numeratori.filter((el) =>
    moduloDivisori.some((value) => el % value === 0)
  );
  console.log(moduloNumeratori);

  return d - moduloNumeratori.length;
};

// need to optimize for timeout
// console.log(properFractions(1));
// console.log(properFractions(2));
// console.log(properFractions(5));
// console.log(properFractions(15));
// console.log(properFractions(25));
