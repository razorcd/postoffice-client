import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs/Observable';
import {UserService} from "./user.service";
import {serialize} from "json-typescript-mapper";
import {User} from "./user";
import {RegisterUserParam} from "./register/register-user.param";

 describe('UserService', () => {
  let service: UserService;
  let fakeHttp: HttpClient = new HttpClient(null);

  beforeEach(() => {
    service = new UserService(fakeHttp);
  });

  it('can instantiate service when inject service', () => {
    expect(service instanceof UserService).toBe(true);
  });

  it('#createUser should create a User', () => {
    let user = new User("username1", "email1", "pathIdentifier1");
    let registerUserParam:RegisterUserParam = new RegisterUserParam("username1", "email", "pass1", "pass1" );
    spyOn(fakeHttp, 'post').and.returnValue(Observable.of(serialize(user)));

    service.createUser(registerUserParam).subscribe(result => {
      expect(result).toEqual(user);
    });

    expect(fakeHttp.post).toHaveBeenCalledTimes(1);
  });

  it('#getUser should get a user by username', () => {
    let user = new User("username2", "email2", "pathIdentifier2");

    spyOn(fakeHttp, 'get').and.returnValue(Observable.of(serialize(user)));

    service.getUser("username2").subscribe(result => {
      expect(result).toEqual(user);
    });

    expect(fakeHttp.get).toHaveBeenCalledTimes(1);
    expect(fakeHttp.get).toHaveBeenCalledWith(jasmine.stringMatching(".*username2"), jasmine.any(Object));
  });

  it('#updateUser should update a User by username', () => {
    let user = new User("username3", "email3", "pathIdentifier3");
    spyOn(fakeHttp, 'patch').and.returnValue(Observable.of(null));

    service.updateUser("username3", user).subscribe(result => {
      expect(result).toEqual(null);
    });

    expect(fakeHttp.patch).toHaveBeenCalledTimes(1);
    expect(fakeHttp.patch).toHaveBeenCalledWith(jasmine.stringMatching(".*username3"), serialize(user), jasmine.any(Object));
  });
});
