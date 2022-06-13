import {TableSection,
        TableContainer,
        TableHead,
        TableHeadItem,
        TableBodyItem,    
} from './transactionStyles.js'

const transaction=require('components/transaction/transaction.json')

export const Transaction = ({items}) => (
    <>
    <TableSection>
    <TableContainer>
    <TableHead>
        <tr>
            <TableHeadItem>Type</TableHeadItem>
            <TableHeadItem>Amount</TableHeadItem>
            <TableHeadItem>Currency</TableHeadItem>
        </tr>
    </TableHead>
    
    <tbody>
        {transaction.map(items => (
            <tr key={items.id}>
            <TableBodyItem>{items.type}</TableBodyItem>
            <TableBodyItem>{items.amount}</TableBodyItem>
            <TableBodyItem>{items.currency}</TableBodyItem>
            </tr>
        ))}
    </tbody>
    </TableContainer>
    </TableSection>
    </>
)

export default Transaction;