import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Heading,
  EmptyState
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

import { trophyImage } from "../assets";

import { ProductsCard } from "../components";

export default function HomePage() {
  return (
     <Page narrowWidth >
      <TitleBar title="Prueba Vitruvian" primaryAction={null} />
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <EmptyState
              heading="Bienvenido al creador de características especiales para productos"
              action={{ content: 'Crear nueva característica', path:'/FormP'}}
              image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
            >
              <p> Mediante esta herramienta podrás crear y centralizar
                características de tus productos en un solo lugar.</p>
            </EmptyState>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
