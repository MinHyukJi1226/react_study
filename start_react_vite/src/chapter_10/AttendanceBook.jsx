const students = [
    {
        id: 1,
        name: 'name',
    },
    {
        id: 2,
        name: 'name2',
    },
    {
        id: 3,
        name: 'name3',
    },
    {
        id: 4,
        name: 'name4',
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((students) => {
                return <li key={students.id}>{students.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;