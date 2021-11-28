function Card({ card }) {
  return (
    <article>
      <dl>
        <dt>Title:</dt>
        <dd>{card.question}</dd>

        <dt>Title:</dt>
        <dd>{card.answer}</dd>

        <dt>Title:</dt>
        <dd>{card.side}</dd>

        <dt>Title:</dt>
        <dd>{card.categories}</dd>
      </dl>
    </article>
  )
}

export default Card