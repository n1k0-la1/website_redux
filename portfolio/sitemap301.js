class smthree extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ` 
                                        <ul>
                                <li><a href="/index.html">Website Homepage</a></li>
                                <li><a href="">Art Gallery</a></li>
                                <li>Portfolio
                                    <ul>
                                        <li>Learning Plan
                                            <ul>
                                                <li><a href="vision.html">Vision</a></li>
                                                <li><a href="goal/index.html">Goals</a>
                                                    <ul>
                                                        <li><a href="https://ticktick.com/pub/project/collaboration/invite/7f7891d184174320be5072ec17f70c7b?u=c8d761fab286479c9f9697d4f1879557" target="_blank">Task List Manager/Site (How I'm keeping track
                                                            of weeklies)</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="project/index.html">Projects</a>
                                                    <ul>
                                                        <li>Angel Housing Project
                                                            <ul>
                                                                <li><a href="project/ahp_proposal.html">Project Proposal</a></li>
                                                                <li><a href="project/ahp_devlog.html">Project Log</a></li>
                                                                <li><a href="project/ahp_bibliography.html">Annoteded Bibliography</a></li>
                                                                <li><a href="https://app.milanote.com/1VHf3t13Jo9pc9?p=R78ABXJVokE" target="_blank">Milanote Board</a></li>
                                                                <li><a href="https://ellipsus.com/read/2xZQh7yFhr6GW4ZjtOATe7/planninggggg" target="_blank">Outline</a></li>
                                                                <li><a href="https://ellipsus.com/read/NUDlhwASxD49UdKvPO1KL/ahp-script" target="_blank">Script</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>LTI
                                            <ul>
                                                <li><a href="lti/index.html">Contact Log</a></li>
                                            </ul>
                                        </li>
                                        <li>Advisory Work
                                            <ul>
                                                <li>Civics & Government
                                                    <ul>
                                                        <li>Notes
                                                            <ul>
                                                                <li><a href="301/civics1.html">Civics 1</a></li>
                                                                <li><a href="301/civics2.html">Thomas Hobbs Contractarianism</a></li>
                                                                <li><a href="301/civics3.html">John Locke</a></li>
                                                                <li><a href="301/civics4.html">Jean-Jacques Rousseau Romanticism</a></li>
                                                                <li><a href="301/civics5.html">John Stuart Mill Utilitarianism</a></li>
                                                                <li><a href="301/civics6.html">Parts of our Government</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li><a href="https://highlineschools-my.sharepoint.com/:w:/g/personal/4035806_stu_highlineschools_org/IQBHAQjJK9pDSqGwqKsi0KxKAQsXyB3RZ3-QPCiNPIMx0M4?e=1vQOwG" target="_blank">Autobio</a></li>
                                            </ul>
                                        </li>
                                        <li>Msc.
                                            <ul>

                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
        `;
    }
}

customElements.define("301-sitemap", smthree);