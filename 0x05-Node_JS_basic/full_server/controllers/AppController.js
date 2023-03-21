export default class AppController {
  static getHomepage(request, response) {
    response.stats(200).send('Hello Holberton School!');
  }
}
