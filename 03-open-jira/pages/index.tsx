import { NextPage } from "next"
import Typography from '@mui/material/Typography'
import { Layout } from '../components/layouts';

const HomePage: NextPage = () => {
  return (
    <Layout title="OpenJira">
      <Typography variant="h1" color="primary">HELLO FRIEND!</Typography>
    </Layout>
  )
}

export default HomePage