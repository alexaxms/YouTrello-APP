import * as React from "react";
import {FormEvent, useState} from "react";
import styled from "styled-components";
import ITicket from "./data/ITicket.interface";

const TicketWrapper = styled.div`
  background: white;
  padding: 20px;
  border-radius: 20px;
  &:not(:last-child) {
    margin-bottom: 5%;
    margin-right: 1%};
  }
`;
const Title = styled.h4`
  width: 100%;
  margin: 0px;
  color: #5d5d5d;
`;

const Body = styled.p`
  width: 100%;
  color: #8d8d8d;
`;

interface IProps {
    lane_id: number,
}

const TicketForm: React.FC<IProps> = ({lane_id}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [ticket, setTicket] = useState<ITicket>({id: 1, description: "", title: "", lane_id: lane_id});
    const handleOnSubmit = (e: FormEvent) => {
        e.preventDefault();
        setTicket({id: 0, lane_id: lane_id, title: title, description: description})
    };
    return (
        <TicketWrapper>
            <form onSubmit={handleOnSubmit}>
                <Title> <input type="text" name="title" onChange={event => {
                    setTitle(event.target.value)
                }}/> </Title>
                <hr/>
                <Body><input type="text" name="description" onChange={event => {
                    setDescription(event.target.value)
                }}/></Body>
                <input hidden={true} type="submit" value="Submit"/>
            </form>
            {JSON.stringify(ticket)}
        </TicketWrapper>
    );
};
export default TicketForm;