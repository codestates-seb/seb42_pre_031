

function MainpageD(){
        return(
            <div>
                <link></link>
                <div>
                    <div>
                        <div>
                            <h1>
                                <a>How can I change schema structure in Spark</a>
                            </h1>
                            <div>
                                <a> Ask Question</a>
                            </div>
                        </div>
                    </div>
                        <div>
                            <div>
                                <span>Asked</span>
                                <time>today</time>
                            </div>
                            <div>
                                <span>Modified</span>
                                <a>today</a>
                            </div>
                            <div>
                                <sapn>Viewed</sapn>
                                " 3 times "
                            </div>
                        </div>
                    <div>
                        <div>
                            <div>
                                <div></div>
                                <div></div>
                            </div>
                            <div>
                                <div>
                                    <div>
                                        <button>
                                            <sgv>
                                                <path></path>
                                            </sgv>
                                        </button>
                                        <div>
                                            "This question shows research effort;
                                             it is useful and clear"
                                             <div></div>
                                        </div>
                                        <div>0</div>
                                        <button>
                                            <sgv>
                                                <path></path>
                                            </sgv>
                                        </button>
                                        <div>
                                        This question does not show any research effort;
                                         it is unclear or not useful
                                         <div></div>
                                        </div>
                                        <button>
                                            <sgv>
                                                <path></path>
                                            </sgv>
                                            <sgv>
                                                <path></path>
                                            </sgv>
                                        </button>
                                        <div>
                                            Save this question.
                                            <div></div>
                                        </div>
                                        <a>
                                            <sgv>
                                                <path></path>
                                            </sgv>
                                        </a>
                                        <div>
                                            Show activity on this post.
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <p>I have a schema of the following view:</p>
                                        <pre>
                                            <code>
                                                root
                                                |-- indie_guarantees: array (nullable = true)
                                                | |-- element: struct (containsNull = true)
                                                | | |-- indie_guarantee_ArrayType: array (nullable = true)
                                                | | | |-- element: struct (containsNull = true)
                                                | | | | |-- _corr: string (nullable = true)
                                                | | | | |-- currency: string (nullable = true)
                                                | | | | |-- date: string (nullable = true)
                                                | | | | |-- end_date: string (nullable = true)
                                                | | | | |-- end_reason: string (nullable = true)
                                                | | | | |-- fact_end_date: string (nullable = true)
                                                | | | | |-- 
                                                <span>sum</span>
                                                : string (nullable = true)
                                            </code>
                                        </pre>
                                        <p>and I need to change it like this:</p>
                                        <pre>
                                            <code>
                                                root
                                                |-- indie_guarantees: array (nullable = true)
                                                | |-- element: struct (containsNull = true)
                                                | | |-- indie_guarantee_ArrayType: array (nullable = true)
                                                | | | |-- element: struct (containsNull = true)
                                                | | | | |-- _corr: string (nullable = true)
                                                | | | | |-- currency: string (nullable = true)
                                                | | | | |-- date: string (nullable = true)
                                                | | | | |-- end_date: string (nullable = true)
                                                | | | | |-- end_reason: string (nullable = true)
                                                | | | | |-- fact_end_date: string (nullable = true)
                                                | | | | |-- 
                                                <span>sum</span>
                                                : string (nullable = true)
                                                | | | | |-- uid: string (nullable = true)
                                                | | |-- sign: string (nullable = true)
                                            </code>
                                        </pre>
                                        <p>
                                        Merge **indie_guarantee_ArrayType **(array) 
                                        and **indie_guarantee **(struct) in one array and don't forget about 
                                            <strong>sign</strong>
                                        </p>
                                        <p>I've tried to do</p>
                                        <pre>
                                            <code>
                                                "df.withColumn("
                                                <span> "newColumn"</span>
                                                ", coalesce("
                                                <span>"indie_guarantee_ArrayType"</span>
                                                ", array("
                                                    <span>"indie_guarantee"</span>
                                                    ")))"
                                            </code>
                                        </pre>
                                        <p>
                                            "but it works incorrectly. It creates a new field not in "
                                            <strong>indie_guarantees</strong>
                                            "How can I do it?"
                                        </p>
                                    </div>
                                    <div>
                                        <div>
                                            <div>
                                                <ul>
                                                    <li>
                                                        <a>apache-spark</a>
                                                    </li>
                                                    <li>
                                                        <a>pyspark</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <div>
                                                <div>
                                                    <div>
                                                        <div>
                                                            <a>Share</a>
                                                            <div>
                                                                <div>
                                                                    <label>Share a link to this question</label>
                                                                    <span>(Includes your user id)</span>
                                                                </div>
                                                                <div>
                                                                    <input type="text"></input>
                                                                </div>
                                                                <div>
                                                                    <button>Copy link</button>
                                                                    <a>CC BY-SA 4.0</a>
                                                                    <div></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <button>Edit</button>
                                                        </div>
                                                        <div>
                                                            <button> Follow </button>
                                                            <div>
                                                                "Follow this question to receive notifications"
                                                                <div></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div></div>
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <div>
                                                        "asked"
                                                        <span>44 secs ago</span>
                                                    </div>
                                                    <div>
                                                        <a>
                                                            <div>
                                                                <img></img>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div>
                                                        <a>yurkaishere</a>
                                                        <span>yurkaishere</span>
                                                        <div>
                                                            <span>19</span>
                                                            <span>
                                                                <span></span>
                                                                <span>4</span>
                                                            </span>
                                                            <span>4 bronze badges</span>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span></span>
                                <div>
                                    <div>
                                        <ul></ul>
                                    </div>
                                    <div>
                                        <a>Add a comment</a>
                                        <span></span>
                                        <a></a>
                                    </div>
                                </div>
                            </div>
                         </div>
                        <div>
                            <div>
                                <div></div>
                            </div>
                            <div></div>
                        </div>
                        <div>
                            <a></a>
                            {/* 아래 div css 하지말것 margin top 10 만 줘 */}
                            <div></div>
                            <h2>
                                Know someone who can answer? Share a link to this
                                <a>question</a>
                                via
                                <a>
                                email
                                </a>
                                ,
                                <a>
                                Twitter
                                </a>
                                or
                                <a>
                                Facebook
                                </a>
                            </h2>
                            <a></a>
                            <form>
                                <input></input>
                                <input></input>
                                <input></input>
                                <h2></h2>
                                <h2> Your Answer </h2>
                                <script></script>
                                <script></script>
                                <div>
                                    <div></div>
                                    <aside></aside>
                                    <aside></aside>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div></div>
                                <div>
                                    <button>Post Your Answer</button>
                                    <button>
                                        Discard
                                    </button>
                                </div>
                                <div></div>
                            </form>
                            <h2>
                                <div>
                                    Browse other questions tagged 
                                    <ul>
                                        <li>
                                            <a>apache-spark</a>
                                        </li>
                                        <li>
                                            <a>pyspark</a>
                                        </li>
                                    </ul>
                                    or
                                    <a>
                                    ask your own question
                                    </a>
                                    .
                                </div>
                            </h2>
                        </div>
                    </div> 
                    <div></div>
                </div>
                <script></script>
        </div>
        )



}


export {MainpageD}