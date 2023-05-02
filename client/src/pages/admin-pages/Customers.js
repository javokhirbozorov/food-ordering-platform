// @mui
import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableContainer,
  Container,
  Card,
  CardHeader,
  CardContent,
} from '@mui/material';
// components
import Scrollbar from '../../components/scrollbar';
import { TableHeadCustom } from '../../components/table';
// ----------------------------------------------------------------------

function createData(name, calories, fat, carbs, protein, type) {
  return { name, calories, fat, carbs, protein, type };
}

const TABLE_DATA = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 'Short'),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 'Long'),
  createData('Eclair', 262, 16.0, 24, 6.0, 'Long'),
  createData('Cupcake', 305, 3.7, 67, 4.3, 'Short'),
  createData('Gingerbrjjjjnjead', 356, 16.0, 49, 3.9, 'Long'),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 'Short'),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 'Long'),
  createData('Eclair', 262, 16.0, 24, 6.0, 'Long'),
  createData('Cupcake', 305, 3.7, 67, 4.3, 'Short'),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const TABLE_HEAD = [
  { id: 'dessert', label: 'Dessert (100g serving)' },
  { id: 'calories', label: 'Calories', align: 'right' },
  { id: 'fat', label: 'Fat (g)', align: 'right' },
  { id: 'carbs', label: 'Carbs (g)', align: 'right' },
  { id: 'protein', label: 'Protein (g)', align: 'right' },
];

// ----------------------------------------------------------------------

export default function Customers() {
  return (
    <Container>
      <Card sx={{ mb: 3 }}>
        <CardHeader title="Customers" />

        <CardContent>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Scrollbar>
              <Table
                sx={{
                  minWidth: 800,
                  bgcolor: (theme) => theme.palette.background.paper,
                }}
              >
                <TableHeadCustom headLabel={TABLE_HEAD} />

                <TableBody>
                  {TABLE_DATA.map((row, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell align="center">{row.calories}</TableCell>
                      <TableCell align="center">{row.fat}</TableCell>
                      <TableCell align="center">{row.carbs}</TableCell>
                      <TableCell align="center">{row.protein}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Scrollbar>
          </TableContainer>
        </CardContent>
      </Card>
    </Container>
  );
}
