import { get, post } from '../utils';

export async function getCourses() {
  return get('http://127.0.0.1:8090/api/collections/matches/records');
}

export async function postCourse(content: object) {
  await post('http://127.0.0.1:8090/api/collections/matches/records', content);
}
