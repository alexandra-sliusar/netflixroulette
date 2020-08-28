import MovieDetails from "./../components/MovieDetails.vue";

export default {
  title: "MovieDetails",
  component: MovieDetails,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MovieDetails },
  template:
    '<div style="background-color: #232323; height:100%"><movie-details v-bind="$props" /></div>',
});

export const DefaultMovieDetails = Template.bind({});
DefaultMovieDetails.args = {
  movie: {
    title: "Back to the Future",
    releaseDate: 1985,
    genre: ["Adventure", "Comedy", "Sci-fi"],
    poster: "back_to_the_future.jpg",
    rating: "8.5",
    duration: "116",
    description: `Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean  invented by his close friend, the eccentric scientist Doc Brown.`
  },
};

export const MovieDetailsWithLongDescription = Template.bind({});
MovieDetailsWithLongDescription.args = {
  movie: {
    title: "Star Wars: The Rise of Skywalker",
    releaseDate: 2019,
    genre: ["Adventure", "Action", "Fantasy"],
    poster: "star_wars_5.jpg",
    rating: "6.6",
    duration: "141",
    description: `Following a threat of revenge by the revived Emperor Palpatine, Kylo Ren obtains a Sith wayfinder, leading him to the uncharted planet Exegol. There, he finds Palpatine, who reveals that he created Snoke as a puppet to control the First Order and lure Kylo to the dark side. Palpatine unveils the Final Order—a secret armada of Star Destroyers—and tells Kylo to find and kill Rey, who is continuing her Jedi training under Resistance leader Leia Organa. Finn and Poe Dameron deliver intelligence from a spy that Palpatine is on Exegol; Rey has learned from Luke Skywalker's notes that a Sith wayfinder can lead them there. Rey, Finn, Poe, Chewbacca, BB-8, and C-3PO depart in the Millennium Falcon to Pasaana, where a clue to a wayfinder is hidden.`
  },
};