//Given a DNA strand,return RNA

const transcription = (dna) => {
  // code here

  let rna = "";

  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "T") {
      rna += "A";
    } else if (dna[i] === "A") {
      rna += "U";
    } else if (dna[i] === "G") {
      rna += "C";
    } else if (dna[i] === "C") {
      rna += "G";
    }
  }

  return rna;
};

console.log(transcription("GCT"));
