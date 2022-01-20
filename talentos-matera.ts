interface Career {
  name: String;
}
class Job {
  career: Career;
  constructor(career: Career) {
    this.career = career;
  }
  getCareer() {
    return this.career;
  }
}
const careers = [
  new Job({ name: '< Dev Front-end full-stack >' }),
  new Job({ name: '< Dev Front-end full-stack >' }),
  new Job({ name: '< Dev Front-end full-stack >' }),
  new Job({ name: '< Dev Front-end full-stack >' }),
]
console.log(`Estamos buscando por:`);

careers.forEach(({ career }) => console.log(career.name));

console.log("Caso tenha interesse, envie um e-mail para: erika@matera.com");