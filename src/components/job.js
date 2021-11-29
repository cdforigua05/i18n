import React from "react";
import {FormattedDate, FormattedNumber,useIntl} from 'react-intl';
const Job = (props) => {
  const intl= useIntl()
  const money = intl.locale==="es"?'millones':'million';
  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>{props.offer.salary} {money}</td>
      <td>{props.offer.city}</td>
      <td>
      <FormattedDate
      value={new Date(props.offer.date)}
      year='numeric'
      month='long'
      day='numeric'
      weekday='long'
      />
      </td>
      <td>
        <FormattedNumber value={props.offer.visits}/>
      </td>
    </tr>
  );
};

export default Job;
