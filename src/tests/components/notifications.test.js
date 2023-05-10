import React from "react";
import { fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from '../jest.setup';
import "@testing-library/jest-dom";
import instance from "../../redux/axiosinstance";
import { act } from "react-dom/test-utils";
import { notifMock } from "../mocks/notifications.mock";
import Notification from "../../components/notification/notification";
import 'setimmediate';
import AllNotification from "../../components/notification/allNotification";



describe('notification test', ()=>{
    instance.get.mockResolvedValue({data: {status: 200, notifications: notifMock}})
    instance.post.mockResolvedValue({data: {status: 200, message: 'Notification marked as Read'}})
    
    test("testing for all notification", async()=>{
        const {getByTestId, getByRole} =  render(<AllNotification />)
        await waitFor(() => {
            expect(screen.getByTestId('empty')).toBeInTheDocument();
        });

        const checkbox = getByTestId('myCheckbox1');
        expect(checkbox).toBeInTheDocument()
        act(()=>{
            fireEvent.click(checkbox)
        })
        const markAsRead = getByRole('button', {name: /Mark as read/i});
        expect(markAsRead).toBeInTheDocument();
        act(()=>{
            fireEvent.click(markAsRead)
        })
        
        const markAll = getByTestId('markAll');
        expect(markAll).toBeInTheDocument()
        act(()=>{
            fireEvent.click(markAll)
        })

        const deleteNotif = getByTestId('delete');
        expect(deleteNotif).toBeInTheDocument()
        act(()=>{
            fireEvent.click(deleteNotif)
        })
    })
})