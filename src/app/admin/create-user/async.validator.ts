import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { map } from "rxjs";
import { UserService } from "src/app/services/user.service";

export function userUserNameValidator(users:UserService):AsyncValidatorFn{
    return (control:AbstractControl) => {
        return users.getUsers()
        .pipe(
            map((users: any[]) => {
                const user = users.find((user: { username: string; }) => user.username.toLowerCase() == control.value.toLowerCase());
                return user ? {usernameExists:true} : null;
            })
        )
    }
}