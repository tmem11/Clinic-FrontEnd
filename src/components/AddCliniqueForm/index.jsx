import Card from "../Card"
import Map from "../Map"
function AddClinique(props) {

    return (<div>
        <Card title="New Clinique">
            <div class="form-outline mb-4">
                <Card title="Location">
                    <Map setLat={props.setLat} setLng={props.setLng} location={[31.242986, 35.084657]}></Map>
                </Card>
            </div>
            <div class="form-outline mb-4">
                <textarea class="form-control" onChange={props.setDescription} />
                <label class="form-label" for="form2Example1">Description</label>
            </div>
        </Card>
    </div>
    )
}

export default AddClinique