import http from "./http-common";

class DataService {
  getRepoDetail() {
    return http.get("/repos/angular/angular");
  }
}

export default new DataService();
