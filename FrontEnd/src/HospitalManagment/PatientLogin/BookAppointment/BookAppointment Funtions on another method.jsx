{/* { Select time in available Time Slots  */}
          {/*
          <div className="Time">
            <h3>Available slots:</h3>
            <ul>
              {availableSlots.map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      handleAvailableSlot(item.newStart);
                    }}
                  >
                    {formatTime(item.newStart)} - {formatTime(item.newEnd)}
                  </li>
                );
              })}
            </ul>
            {selectedSlot ? (
              <h3>You selected {formatTime(selectedSlot)} time.</h3>
            ) : (
              ""
            )}
          </div>
          */}
