import { User } from '../../models/user';

export class UsersMockDataService {
    public createDB() {
        const users = [
            new User(1, 'Ivan', 'Ivanov', 'Kiev, st. Ivanovskay 7'),
            new User(2, 'Petr', 'Petrov', 'Kiev, st. Petriskay 7'),
            new User(3, 'Semen', 'Semenov', 'Kiev, st. Semenovskay 7'),
            new User(4, 'Kate', 'Katerinova', 'Kiev, st. Katerinskay 7')
        ]

        return { users }
    }
}
