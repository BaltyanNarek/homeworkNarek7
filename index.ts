interface iMan {
	fname: string;
	lname: string;
	age: number;
	id: number;
}

// Pick<> operator

type pickMan = Pick<iMan, 'fname' | 'lname'>;

const man1: pickMan = {
	fname: 'Narek',
	lname: 'Baltyan',
};

console.log(man1);

// Omit<> operator

type omitMan = Omit<iMan, 'age' | 'id'>;

const man2: omitMan = {
	fname: 'Narek',
	lname: 'Baltyan',
}

console.log(man2);

// Record<> operator

interface iMember {
	id: number;
	nationality: string;
}

type groupMembers = 'Amir' | 'Oleg' | 'Karmen';

const members: Record<groupMembers, iMember> = {
	Amir: { id: 1, nationality: 'Persian'},
	Oleg: { id: 2, nationality: 'Russian'},
	Karmen: { id: 3, nationality: 'Spanish'},
}

console.log(members);

// Partial<> operator

const man3: Partial<iMan> = {
	fname: 'Narek',
	age: 30,
}

console.log(man3);

// Required<> operator

interface iWoman {
	fname?: string;
	lname?: string;
	age?: number;
}

const woman1: iWoman = {
	fname: 'Kaqav',
};

const woman2: Required<iWoman> = {
	fname: 'Qnar',
	lname: 'Balasanyan',
	age: 44,
}
