class yeartwo extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ` 
         <table>
                                <thead>
                                    <tr>
                                        <th>Business Name</th>
                                        <th>Contact Name</th>
                                        <th>Job Title/Description</th>
                                        <th>Email</th>
                                        <th>Phone number</th>
                                        <th>Date Contacted</th>
                                        <th>Follow-up</th>
                                        <th>Interview date</th>
                                        <th>Shadow Day</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="green">
                                        <td>Puget Sound Navy Museum</td>
                                        <td>Kathrine Young</td>
                                        <td>Archivist</td>
                                        <td>kathrine.young2.civ@ us.navy.mil</td>
                                        <td></td>
                                        <td>0260220</td>
                                        <td></td>
                                        <td>0260312</td>
                                        <td>0260519 @ 10:00</td>
                                    </tr>
                                    <tr>
                                        <td><a href="https://scp-wiki.wikidot.com/scp-9811" target="_blank">Montanna [sic] Natural and Cultural History Museum</a></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class="green">
                                        <td>Connection Museum Seattle</td>
                                        <td>Ed Mattson</td>
                                        <td>Volunteer Board Member</td>
                                        <td>info@ connectionsmuseum. org</td>
                                        <td>(206) 767- 3012</td>
                                        <td>0260324</td>
                                        <td>0260325<br>0260327</td>
                                        <td>0260329</td>
                                        <td>0260428 @ 1:00</td>
                                    </tr>
                                    <tr>
                                        <td>Tacoma Art Museum</td>
                                        <td></td>
                                        <td></td>
                                        <td>Info@ tacomaartmuseum .org</td>
                                        <td>(253) 272- 4258</td>
                                        <td>0260324</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class="green">
                                        <td>National Archives at Seattle</td>
                                        <td>Courtney Elliott</td>
                                        <td></td>
                                        <td>seattle. archives @nara .gov</td>
                                        <td>(206) 336- 5132</td>
                                        <td>0260421</td>
                                        <td></td>
                                        <td>0260430 @ 11:00</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Klondike Gold Rush National Historical Park</td>
                                        <td></td>
                                        <td></td>
                                        <td>stupid form</td>
                                        <td>(206) 220- 4240</td>
                                        <td>0260421</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class="green">
                                        <td>Seattle Public Library (Special Collections)</td>
                                        <td></td>
                                        <td></td>
                                        <td>stupid form</td>
                                        <td>(206) 386- 4636</td>
                                        <td>0260421</td>
                                        <td></td>
                                        <td>over email</td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                            Note: I've put a pause on contating places as we near the end of the year. The Connections museum is willing to have me as an intern (and they seem lovely to work with) but I'd like to go do the shadow day with the Naval Museum first before making a decision.
        `;
    }
}

customElements.define("201-year", yeartwo);