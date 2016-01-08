(*
** FRP via Bacon.js
*)

(* ****** ****** *)

#define ATS_MAINATSFLAG 1
#define ATS_DYNLOADNAME "my_dynload"

(* ****** ****** *)
//
#include
"share/atspre_define.hats"
//
(* ****** ****** *)
//
staload
UN = "prelude/SATS/unsafe.sats"
//
(* ****** ****** *)
//
#include
"{$LIBATSCC2JS}/staloadall.hats"
//
(* ****** ****** *)
//
staload
"{$LIBATSCC2JS}/SATS/Bacon.js/baconjs.sats"
//
(* ****** ****** *)

%{^
//
var
theNexts =
  $("#button_next").asEventStream("click")
//
var theFib1s_next = 0
//
%} // end of [%{^]

(* ****** ****** *)
//
val
theNexts =
  $extval(EStream(void), "theNexts")
//
(* ****** ****** *)
//
typedef state = $tup(int,int)
//
val
theFib2s_next =
scan{state,void}
(
  theNexts, $tup(0, 1)
, lam (state, _) => $tup(state.1, state.0+state.1)
) (* end of [val] *)
//
val
theFib1s_next =
  map(theFib2s_next, lam(state: state): int =<cloref1> state.0)
//
(* ****** ****** *)
//
extvar "theFib1s_next" = theFib1s_next
//
(* ****** ****** *)
    
%{$
//
function
FibStream_initize()
{
  var _ = my_dynload()
  var _ = theFib1s_next.assign($("#fibval_next"), "text")
}
//
jQuery(document).ready(function(){FibStream_initize();});
//
%} // end of [%{$]

(* ****** ****** *)

(* end of [FibStream.dats] *)
