import moment from 'moment'

export default [
    {
        id: '1',
        description: 'Water bill',
        note: '',
        amount: 4500,
        createdAt: 0
    }, {
        id: '2',
        description: 'Gas bill',
        note: '',
        amount: 109500,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    }, {
        id: '3',
        description: 'Credit Card',
        note: '',
        amount: 5500,
        createdAt: moment(0).add(4, 'days').valueOf()
    }
];