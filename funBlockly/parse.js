function replaceLine(descriptionStr) {
    console.log(descriptionStr);
    //Aが含まれる線分
    descriptionStr = descriptionStr.replace(`Segment(A, B)`,`(線分A,B)`);
    descriptionStr = descriptionStr.replace(`Segment(B, A)`,`(線分B,A)`);
    descriptionStr = descriptionStr.replace(`Segment(A, C)`,`(線分A,C)`);
    descriptionStr = descriptionStr.replace(`Segment(C, A)`,`(線分C,A)`);
    descriptionStr = descriptionStr.replace(`Segment(A, D)`,`(線分A,D)`);
    descriptionStr = descriptionStr.replace(`Segment(D, A)`,`(線分D,A)`);
    descriptionStr = descriptionStr.replace(`Segment(A, E)`,`(線分A,E)`);
    descriptionStr = descriptionStr.replace(`Segment(E, A)`,`(線分E,A)`);
    descriptionStr = descriptionStr.replace(`Segment(A, F)`,`(線分A,F)`);
    descriptionStr = descriptionStr.replace(`Segment(F, A)`,`(線分F,A)`);
    //Aが含まれる直線
    descriptionStr = descriptionStr.replace(`Line(A, B)`,`(直線A,B)`);
    descriptionStr = descriptionStr.replace(`Line(B, A)`,`(直線B,A)`);
    descriptionStr = descriptionStr.replace(`Line(A, C)`,`(直線A,C)`);
    descriptionStr = descriptionStr.replace(`Line(C, A)`,`(直線C,A)`);
    descriptionStr = descriptionStr.replace(`Line(A, D)`,`(直線A,D)`);
    descriptionStr = descriptionStr.replace(`Line(D, A)`,`(直線D,A)`);
    descriptionStr = descriptionStr.replace(`Line(A, E)`,`(直線A,E)`);
    descriptionStr = descriptionStr.replace(`Line(E, A)`,`(直線E,A)`);
    descriptionStr = descriptionStr.replace(`Line(A, F)`,`(直線A,F)`);
    descriptionStr = descriptionStr.replace(`Line(F, A)`,`(直線F,A)`);
    //Bが含まれる線分
    descriptionStr = descriptionStr.replace(`Segment(B, C)`,`(線分B,C)`);
    descriptionStr = descriptionStr.replace(`Segment(C, B)`,`(線分C,B)`);
    descriptionStr = descriptionStr.replace(`Segment(B, D)`,`(線分B,D)`);
    descriptionStr = descriptionStr.replace(`Segment(D, B)`,`(線分D,B)`);
    descriptionStr = descriptionStr.replace(`Segment(B, E)`,`(線分B,E)`);
    descriptionStr = descriptionStr.replace(`Segment(E, B)`,`(線分E,B)`);
    descriptionStr = descriptionStr.replace(`Segment(B, F)`,`(線分B,F)`);
    descriptionStr = descriptionStr.replace(`Segment(F, B)`,`(線分F,B)`);
    //Bが含まれる直線
    descriptionStr = descriptionStr.replace(`Line(B, C)`,`(直線B,C)`);
    descriptionStr = descriptionStr.replace(`Line(C, B)`,`(直線C,B)`);
    descriptionStr = descriptionStr.replace(`Line(B, D)`,`(直線B,D)`);
    descriptionStr = descriptionStr.replace(`Line(D, B)`,`(直線D,B)`);
    descriptionStr = descriptionStr.replace(`Line(B, E)`,`(直線B,E)`);
    descriptionStr = descriptionStr.replace(`Line(E, B)`,`(直線E,B)`);
    descriptionStr = descriptionStr.replace(`Line(B, F)`,`(直線B,F)`);
    descriptionStr = descriptionStr.replace(`Line(F, B)`,`(直線F,B)`);
    //Cが含まれる線分
    descriptionStr = descriptionStr.replace(`Segment(C, D)`,`(線分C,D)`);
    descriptionStr = descriptionStr.replace(`Segment(D, C)`,`(線分D,C)`);
    descriptionStr = descriptionStr.replace(`Segment(C, E)`,`(線分C,E)`);
    descriptionStr = descriptionStr.replace(`Segment(E, C)`,`(線分E,C)`);
    descriptionStr = descriptionStr.replace(`Segment(C, F)`,`(線分C,F)`);
    descriptionStr = descriptionStr.replace(`Segment(F, C)`,`(線分F,C)`);
    //Cが含まれる直線
    descriptionStr = descriptionStr.replace(`Line(C, D)`,`(直線C,D)`);
    descriptionStr = descriptionStr.replace(`Line(D, C)`,`(直線D,C)`);
    descriptionStr = descriptionStr.replace(`Line(C, E)`,`(直線C,E)`);
    descriptionStr = descriptionStr.replace(`Line(E, C)`,`(直線E,C)`);
    descriptionStr = descriptionStr.replace(`Line(C, F)`,`(直線C,F)`);
    descriptionStr = descriptionStr.replace(`Line(F, C)`,`(直線F,C)`);
    //Dが含まれる線分
    descriptionStr = descriptionStr.replace(`Segment(D, E)`,`(線分D,E)`);
    descriptionStr = descriptionStr.replace(`Segment(E, D)`,`(線分E,D)`);
    descriptionStr = descriptionStr.replace(`Segment(D, F)`,`(線分D,F)`);
    descriptionStr = descriptionStr.replace(`Segment(F, D)`,`(線分F,D)`);
    //Dが含まれる直線
    descriptionStr = descriptionStr.replace(`Line(D, E)`,`(直線D,E)`);
    descriptionStr = descriptionStr.replace(`Line(E, D)`,`(直線E,D)`);
    descriptionStr = descriptionStr.replace(`Line(D, F)`,`(直線D,F)`);
    descriptionStr = descriptionStr.replace(`Line(F, D)`,`(直線F,D)`);
    //Eが含まれる線分
    descriptionStr = descriptionStr.replace(`Segment(E, F)`,`(線分E,F)`);
    descriptionStr = descriptionStr.replace(`Segment(F, E)`,`(線分F,E)`);
    //Eが含まれる直線
    descriptionStr = descriptionStr.replace(`Line(E, F)`,`(直線E,F)`);
    descriptionStr = descriptionStr.replace(`Line(F, E)`,`(直線F,E)`);
}
