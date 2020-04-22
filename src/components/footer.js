import React from "react"

import Container from 'react-bootstrap/Container'

const Footer = () => (
  <footer class="footer text-muted mt-3" style={{
    backgroundColor: `#f7f7f7`,
  }}>
    <Container fluid={true} className="p-3 p-md-5">
      <p>{(new Date().getFullYear())} - <a href="https://pirates.cat">Pirates de Catalunya</a> - versió 0.0.1 (<a href="https://github.com/pirates-cat/cultura-lliure">repositori</a>)</p>
      <p>Pirates de Catalunya es un partit polític part d'un moviment internacional. El nostre ideari té quatre eixos fonamentals: els drets humans, la democràcia directa, la transparència i les dades obertes, i l'accés a la cultura, el coneixement i la informació. Vols saber què pensem? <a href="http://pirates.cat/el-partit/ideari/">Llegeix el nostre ideari!</a></p>
      <p><a href="https://participa.pirates.cat/form/obres-lliures">Envia més obres</a></p>
    </Container>
  </footer>
)

export default Footer
