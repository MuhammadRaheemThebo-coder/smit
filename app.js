
        var textarea =
            document.getElementById("textarea");

        var color =
            document.getElementById("color");

        var defaultSize = 16;


        function SetOp(event) {


            if (event == "bold") {

                if (
                    textarea.style.fontWeight == "bold"
                ) {

                    textarea.style.fontWeight =
                        "normal";

                } else {

                    textarea.style.fontWeight =
                        "bold";

                }

            }


            else if (event == "italic") {

                if (
                    textarea.style.fontStyle == "italic"
                ) {

                    textarea.style.fontStyle =
                        "normal";

                } else {

                    textarea.style.fontStyle =
                        "italic";

                }

            }


            else if (event == "underline") {

                if (
                    textarea.style.textDecoration ==
                    "underline"
                ) {

                    textarea.style.textDecoration =
                        "none";

                } else {

                    textarea.style.textDecoration =
                        "underline";

                }

            }


            else if (event == "increase") {

                defaultSize++;

                textarea.style.fontSize =
                    defaultSize + "px";

                updateFontSize();

            }


            else if (event == "dec") {

                if (defaultSize > 8) {

                    defaultSize--;

                    textarea.style.fontSize =
                        defaultSize + "px";

                    updateFontSize();

                }

            }


            else if (event == "color") {

                textarea.style.color =
                    color.value;

            }

        }


        function updateFontSize() {

            document.getElementById("fontSize")
                .innerText =
                "Font Size: " +
                defaultSize +
                "px";

        }


        function clearText() {

            textarea.value = "";

            document.getElementById("counter")
                .innerText =
                "Characters: 0";

        }


        textarea.addEventListener(
            "input",
            function () {

                document.getElementById("counter")
                    .innerText =
                    "Characters: " +
                    textarea.value.length;

            }
        );

    