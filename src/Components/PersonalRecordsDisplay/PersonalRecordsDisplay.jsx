const PersonalRecordsDisplay = (props) => {
    return ( 
        <table>
            <thead>
                <tr>
                    <th>Squat PR</th>
                    <th>Bench PR</th>
                    <th>Bent-Over Row PR</th>
                    <th>Overhead PR</th>
                </tr>
            </thead>
            <tbody>
            

                
                    <tr>
                        <td>{props.parentSquat.weight_amount}</td>
                        <td>{props.parentBench.weight_amount}</td>
                        <td>{props.parentBent.weight_amount}</td>
                        <td>{props.parentOverhead.weight_amount}</td>
                    </tr>
                    
               
            </tbody>
            </table>
     );
}
 
export default PersonalRecordsDisplay;