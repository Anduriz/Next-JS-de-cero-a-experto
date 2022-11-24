import { NextPage } from "next"
import { Card, CardHeader, Grid } from "@mui/material";
import { Layout } from '../components/layouts';
import { EntryList, NewEntry } from "../components/ui";

const HomePage: NextPage = () => {
  return (
    <Layout title="Home - OpenJira">
      <Grid container spacing={ 2 }>
        <Grid item xs={ 12 } sm={ 4 }>
          {/* Take all view height - 100 px from the navbar */}
          <Card sx={{ height:'calc(100vh - 100px)' }}>
            <CardHeader title="Pendientes">

            </CardHeader>
            <NewEntry/>
            <EntryList status="pending"/>
          </Card>
        </Grid>
        <Grid item xs={ 12 } sm={ 4 }>
          <Card sx={{ height:'calc(100vh - 100px)' }}>
            <CardHeader title="En Progreso">

            </CardHeader>
            <EntryList status="in-progress"/>
          </Card>
        </Grid>
        <Grid item xs={ 12 } sm={ 4 }>
          <Card sx={{ height:'calc(100vh - 100px)' }}>
            <CardHeader title="Completadas">

            </CardHeader>
            <EntryList status="finished"/>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default HomePage